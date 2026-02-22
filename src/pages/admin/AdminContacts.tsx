import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Mail, MailOpen } from "lucide-react";

const AdminContacts = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const { toast } = useToast();

  const load = () => {
    api.getContacts().then((r) => setContacts(r.data || [])).catch(() => {});
  };

  useEffect(() => { load(); }, []);

  const handleRead = async (id: string) => {
    try {
      await api.markContactRead(id);
      load();
    } catch {}
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    try {
      await api.deleteContact(id);
      toast({ title: "Message deleted" });
      load();
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  const unread = contacts.filter((c) => !c.isRead).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Contact Messages</h1>
        <p className="text-muted-foreground">
          {contacts.length} total messages{unread > 0 && ` · ${unread} unread`}
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No messages yet</TableCell></TableRow>
              ) : (
                contacts.map((msg) => (
                  <TableRow key={msg._id} className={!msg.isRead ? "bg-primary/5" : ""}>
                    <TableCell>
                      {msg.isRead ? (
                        <Badge variant="secondary" className="gap-1"><MailOpen className="h-3 w-3" /> Read</Badge>
                      ) : (
                        <Badge className="gap-1"><Mail className="h-3 w-3" /> New</Badge>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{msg.name}</TableCell>
                    <TableCell>
                      <a href={`mailto:${msg.email}`} className="text-primary hover:underline">{msg.email}</a>
                    </TableCell>
                    <TableCell className="max-w-[300px] truncate">{msg.message}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : "—"}
                    </TableCell>
                    <TableCell className="text-right">
                      {!msg.isRead && (
                        <Button variant="ghost" size="icon" onClick={() => handleRead(msg._id)} title="Mark as read">
                          <MailOpen className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(msg._id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContacts;
