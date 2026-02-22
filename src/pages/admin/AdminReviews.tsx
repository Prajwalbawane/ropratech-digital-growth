import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Star } from "lucide-react";

const AdminReviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const { toast } = useToast();

  const load = () => {
    api.getReviews().then((r) => setReviews(r.data || [])).catch(() => {});
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this review?")) return;
    try {
      await api.deleteReview(id);
      toast({ title: "Review deleted" });
      load();
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Reviews</h1>
        <p className="text-muted-foreground">{reviews.length} client reviews</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No reviews yet</TableCell></TableRow>
              ) : (
                reviews.map((rev) => (
                  <TableRow key={rev._id}>
                    <TableCell className="font-medium">{rev.clientName}</TableCell>
                    <TableCell>{rev.company || "—"}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-3.5 w-3.5 ${i < rev.rating ? "text-secondary fill-secondary" : "text-muted"}`} />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[300px] truncate">{rev.message}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {rev.createdAt ? new Date(rev.createdAt).toLocaleDateString() : "—"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(rev._id)}>
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

export default AdminReviews;
