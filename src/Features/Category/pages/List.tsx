import { useEffect, useState, type ReactNode } from "react";
import { ApiService } from "Service";
import { Loader } from "component/Loader";
import { useDeleteCategoryMutation } from "../queries";
import Button from "component/Button/button";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface CategoryItem {
  actions: ReactNode;
  categoryId: number;
  name: string;
}

export default function CategoryList() {
  const navigate = useNavigate();
  const [category, setCategory] = useState<CategoryItem[]>([]);
  const { isPending, mutateAsync } = useDeleteCategoryMutation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiService.get<CategoryItem[]>("category")
      .then(setCategory)
      .finally(() => setLoading(false));
  }, []);

  if (loading || isPending) {
    return <Loader />;
  }

  const actionBodyTemplate = (rowData: CategoryItem) => {
    return (
      <div className="flex items-center gap-2">
        <button
          className="bg-red-500 hover:bg-red-600 text-black px-1 py-1 rounded text-sm transition"
          onClick={async () => {
            await mutateAsync(rowData.categoryId);
            setCategory((prev) =>
              prev.filter((item) => item.categoryId !== rowData.categoryId)
            );
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl text-white font-bold mb-4">Category List</h2>
      <Button
        caption="+ Category"
        type="button"
        onClick={() => navigate("/categories/create")}
      />
      <div className="card mt-4">
        <DataTable
          value={category}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="name" header="Name" style={{ width: "70%" }}></Column>
          <Column header="Actions" body={actionBodyTemplate} style={{ width: "60%" }}></Column>
        </DataTable>
      </div>
    </div>
  );
}
