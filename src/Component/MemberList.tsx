import { useEffect, useState } from "react";

interface MemberItem {
memberId: number;
memberName: string;
memberType: string;
}

export default function MemberList() {
const [members, setMembers] = useState<MemberItem[]>([]);

useEffect(() => {
    const fetchMembers = async () => {
    try {
        const response = await fetch("http://localhost:5282/api/members");
        const data = await response.json();
        setMembers(data);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
    };

    fetchMembers();
}, []);

return (
    <div className="p-6">
    <h2 className="text-xl font-bold mb-4">Member List</h2>

    <div className="overflow-x-auto">
        <table className="min-w-full border border-red-200 shadow-md rounded-lg">

        <thead className="bg-gray-100">
            <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                ID
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Member Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Member Type
            </th>
            </tr>
        </thead>

        <tbody className="bg-white">
            {members.map((m) => (
            <tr
                key={m.memberId}
                className="hover:bg-gray-50 transition"
            >
                <td className="px-6 py-3 border-b">{m.memberId}</td>
                <td className="px-6 py-3 border-b">{m.memberName}</td>
                <td className="px-6 py-3 border-b">{m.memberType}</td>
            </tr>
            ))}
        </tbody>

        </table>
    </div>
    </div>
);
}