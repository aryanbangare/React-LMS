import { useParams, useNavigate } from 'react-router-dom';
import { useDeleteCategoryMutation } from '../queries';

export default function Delete() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useDeleteCategoryMutation();

  if (!id) {
    return <div className="p-6">Invalid Member</div>;
  }

  const handleDelete = async () => {
    try {
      await mutateAsync(Number(id));
      alert('Member deleted successfully!');
      navigate('/members/list');
    } catch {
      alert('Delete failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-100">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Delete Member
        </h2>

        <p className="text-center mb-6">
          Are you sure you want to delete this member?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/members/list')}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={isPending}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            {isPending ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
