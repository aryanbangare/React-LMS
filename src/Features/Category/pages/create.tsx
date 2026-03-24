import Button from "component/Button/button";
import TextBox from "component/Form/TextBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiService } from "Service";



export default function Create() {

  const [Name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="mt-10 px-6 text-white">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Create Category
        </h1>

        <button
          onClick={() => navigate("/categories/list")}
          className="text-slate-400 hover:text-white text-sm"
        >
          ← Back to List
        </button>
      </div>


      <div className="flex justify-center">
        <form
          className="w-full max-w-lg bg-slate-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          onSubmit={async (e) => {
            e.preventDefault();

            try {
              setSubmitting(true);

              await ApiService.post("category", {
              
               Name: String (Name),
              });

              navigate("/Categories/list");

            } catch (ex) {
              alert(ex);
            } finally {
              setSubmitting(false);
            }
          }}
        >

          

          <TextBox
            label="Name"
            name="Name"
            placeholder="Enter Name"
            value={Name}
            onChange={setName}
            disabled={submitting}
          />

          <div className="mt-6 flex justify-end">
            <Button
              caption={submitting ? "Adding..." : "Add"}
              disabled={submitting}
              type="submit"
            />
          </div>

        </form>
      </div>
    </div>
  );
}