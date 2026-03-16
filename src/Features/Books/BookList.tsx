import { useEffect,useState } from "react";
import { Loader } from "component";
import {ApiService} from "Service";

interface BookItem {
bookId: number;
bookName: string;
publisher: string;
author: string;
price: number
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
    <h2 className="text-xl font-bold mb-4">Book List</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full border border-red-200 shadow-md rounded-lg">
        <thead className="bg-gray-100">
                <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    Book Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">           
                    Publisher
                </th>   
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    Author
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    Price
                </th>   
                </tr>
            </thead>
            <tbody className="bg-white">    
                {books.map((b) => (
                <tr
                    key={b.bookId}
                    className="hover:bg-gray-50 transition"
                >       
                    <td className="px-6 py-3 border-b">{b.bookId}</td>
                    <td className="px-6 py-3 border-b">{b.bookName}</td>
                    <td className="px-6 py-3 border-b">{b.publisher}</td>
                    <td className="px-6 py-3 border-b">{b.author}</td>      
                    <td className="px-6 py-3 border-b">${b.price.toFixed(2)}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
);
}