import { useEffect, useState } from "react";
import { Loader } from "component/Loader";
import { ApiService } from "Service";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface MemberItem {
  memberId: number;
  memberName: string;
  memberType: string;
}

export default function MemberList() {
  const [members, setMembers] = useState<MemberItem[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    ApiService.get<MemberItem[]>("members")
      .then(setMembers)
      .finally(() => setloading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl text-white font-bold mb-4">Member List</h2>
      <div className="card">
        <DataTable
          value={members}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="memberId" header="ID" style={{ width: "10%" }}></Column>
          <Column field="memberName" header="Name" style={{ width: "45%" }}></Column>
          <Column field="memberType" header="Type" style={{ width: "45%" }}></Column>
        </DataTable>
      </div>
    </div>
  );
}