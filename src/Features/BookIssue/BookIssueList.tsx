import { useEffect,useState } from "react";
import { Loader } from "component";
import { ApiService } from "Service";

interface BookIssueItem{
    issueId:number;
    memberId:number;
    bookId:number;
    issueDate:number;
    returnDate:number;
    renewDate:number;
}
export default function BookIssueList(){
    const[loading,setLoading]=useState(true);
    const[bookissue,setBookIssue] = useState<BookIssueItem[]>([]);
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
    <h2 className="text-xl font-bold mb-4">BookissueList</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full border border-red-200 shadow-md rounded-lg">
        <thead className="bg-gray-100">
                <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    IssueTd
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    MemberId
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">           
                    BookId
                </th>   
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    IssueDate
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    ReturnDate
                </th>   
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    RenewDate
                </th> 
                </tr>
            </thead>
            <tbody className="bg-white">    
                {bookissue.map((b) => (
                <tr
                    key={b.bookId}
                    className="hover:bg-gray-50 transition"
                >       
                    <td className="px-6 py-3 border-b">{b.issueId}</td>
                    <td className="px-6 py-3 border-b">{b.memberId}</td>
                    <td className="px-6 py-3 border-b">{b.bookId}</td>
                    <td className="px-6 py-3 border-b">{b.issueDate}</td>      
                    <td className="px-6 py-3 border-b">{b.returnDate}</td>
                    <td className="px-6 py-3 border-b">{b.renewDate}</td>      
                </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
);
}
