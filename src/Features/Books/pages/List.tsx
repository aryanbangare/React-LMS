import { useEffect, useState } from "react";
import { Loader } from "component/Loader";
import { ApiService } from "Service";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface BookItem {
  bookId: number;
  bookName: string;
  publisher: string;
  author: string;
  price: number;
  categoryId: number;
}

export default function BookList() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<BookItem[]>([]);

  useEffect(() => {
    ApiService.get<BookItem[]>("books")
      .then(setBooks)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl text-white font-bold mb-4">Book List</h2>
      <div className="card mt-4">
        <DataTable
          value={books}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="bookId" header="ID" style={{ width: "10%" }}></Column>
          <Column field="bookName" header="Book Name" style={{ width: "30%" }}></Column>
          <Column field="publisher" header="Publisher" style={{ width: "20%" }}></Column>
          <Column field="author" header="Author" style={{ width: "25%" }}></Column>
          <Column field="price" header="Price" style={{ width: "15%" }}></Column>
        </DataTable>
      </div>
    </div>
  );
}