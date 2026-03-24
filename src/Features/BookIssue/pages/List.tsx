import { useEffect, useState } from "react";
import { Loader } from "component/Loader";
import { ApiService } from "Service";
import Button from "component/Button/button";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface BookIssueItem {
  issueId: number;
  memberId: number;
  bookId: number;
  issueDate: number;
  returnDate: number;
  renewDate: number;
}

export default function BookIssueList() {
  const [loading, setLoading] = useState(true);
  const [bookissue, setBookIssue] = useState<BookIssueItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    ApiService.get<BookIssueItem[]>("issued")
      .then(setBookIssue)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl text-white font-bold mb-4">Book Issue List</h2>
      <Button
        caption="+ Issue Book"
        type="button"
        onClick={() => navigate("/BookIssue/create")}
      />
      <div className="card mt-4">
        <DataTable
          value={bookissue}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="issueId" header="Issue Id" style={{ width: "10%" }}></Column>
          <Column field="memberId" header="Member Id" style={{ width: "15%" }}></Column>
          <Column field="bookId" header="Book Id" style={{ width: "15%" }}></Column>
          <Column field="issueDate" header="Issue Date" style={{ width: "20%" }}></Column>
          <Column field="returnDate" header="Return Date" style={{ width: "20%" }}></Column>
          <Column field="renewDate" header="Renew Date" style={{ width: "20%" }}></Column>
        </DataTable>
      </div>
    </div>
  );
}
