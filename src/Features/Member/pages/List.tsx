import { useEffect, useState } from "react";
import { Loader } from "component/Loader";
import { ApiService } from "Service";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Button from "component/Button/button";
import { useNavigate } from "react-router-dom";
import { useDeleteCategoryMutation } from "../queries";

interface MemberItem {
  memberId: number;
  memberName: string;
  memberType: string;
}

export default function MemberList() {
  const navigate = useNavigate();
  const [members, setMembers] = useState<MemberItem[]>([]);
  const { mutateAsync } = useDeleteCategoryMutation();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    ApiService.get<MemberItem[]>("members")
      .then(setMembers)
      .finally(() => setloading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }
   const actionBodyTemplate = (rowData: MemberItem) => {
    
    return (
      <div className="flex items-center gap-2">
        <button
          className="bg-red-500 hover:bg-red-600 text-black px-1 py-1 rounded text-sm transition"
          onClick={async () => {
            await mutateAsync(rowData.memberId);
            setMembers((prev) =>
              prev.filter((item) => item.memberId !== rowData.memberId)
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
      <h2 className="text-xl text-white font-bold mb-4">Member List</h2>
      <Button
              caption="+ Member"
              type="button"
              onClick={() => navigate("/members/create")}
            />
      <div className="card">
        <DataTable
          value={members}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="memberId" header="ID" style={{ width: "10%" }}></Column>
          <Column field="memberName" header="Name" style={{ width: "25%" }}></Column>
          <Column field="memberType" header="Type" style={{ width: "25%" }}></Column>
          <Column header="Actions" body={actionBodyTemplate} style={{ width: "20%" }}></Column>
        </DataTable>
      </div>
    </div>
  );
}