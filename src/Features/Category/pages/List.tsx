import { useEffect, useState, type ReactNode } from "react";
import { ApiService } from "Service";
import { Loader } from "component/Loader";
import { useDeleteCategoryMutation } from "../queries";
import Button from "component/Button/button";
import { useNavigate } from "react-router-dom";


interface CategoryItem {
  actions: ReactNode;
  categoryId: number;
  name: string;
}

export default function CategoryList() {
  const navigate = useNavigate();
  const [category, setCategory] = useState<CategoryItem[]>([]);

  const { isPending, mutateAsync } =useDeleteCategoryMutation()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ApiService.get<CategoryItem[]>("category")
      .then(setCategory)
      .finally(() => setLoading(false));
  }, []);
  if (loading||isPending)  {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl text-white font-bold mb-4">Category List</h2>
       <Button
                caption="+ Category"
                type="button"
                onClick={() => navigate("/categories/create")}
              />

      <div className="overflow-x-auto">
        <table className="min-w-full border border-red-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {category.map((c) => (
              <tr key={c.categoryId} className="hover:bg-gray-50 transition">
                
                <td className="px-6 py-3 border-b">{c.name}</td>
                <td className="px-6 py-3 border-b">
                  <div className="flex items-center gap-2">
                    <button
                    className="bg-red-500 hover:bg-red-600 text-black px-1 py-1 rounded text-sm transition"
                    onClick={async () => {
                    await mutateAsync(c.categoryId);
                    setCategory(prev => prev.filter(item => item.categoryId !== c.categoryId));
                    }}
                      >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
