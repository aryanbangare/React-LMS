import { useEffect, useState } from "react";
import { ApiService } from "Service";
import { Loader } from "component";

interface CategoryItem {
categoryId: number;
name: string;
}

export default function CategoryList() {
const [category, setCategory] = useState<CategoryItem[]>([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
    ApiService.get<CategoryItem[]>("category")
    .then(setCategory)
    .finally(() => setLoading(false));
    
}, []);
if (loading) {
    return <Loader />;
}

return (
    <div className="p-6"> 
    <h2 className="text-xl font-bold mb-4">Category List</h2>

    <div className="overflow-x-auto">
        <table className="min-w-full border border-red-200 shadow-md rounded-lg">
    
    <thead className="bg-gray-100">
            <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                ID
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Name
            </th>
            </tr>
        </thead>        
        <tbody className="bg-white">
            {category.map((c) => (
            <tr
                key={c.categoryId}
                className="hover:bg-gray-50 transition"
            >
                <td className="px-6 py-3 border-b">{c.categoryId}</td>
                <td className="px-6 py-3 border-b">{c.name}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
);
}