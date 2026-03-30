import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ApiService } from 'Service';


const QUERY_KEY = ['setmembers'];

export function useStateQuery() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      return await ApiService.get<Master.MemberForm[]>('members');
    },
  });
}

export function useDeleteCategoryMutation() {
  const queryClient = useQueryClient();
  const rs = useMutation({
    mutationFn: (id: number) => ApiService.del(`members/${id}`),
    onSuccess: (_, id) => {
      const data = queryClient.getQueryData<Master.memberItem[]>(QUERY_KEY);
      if (!data) {
        return;
      }
      const newData = data.filter(item => item.id !== id);
      console.log(newData);
      queryClient.setQueryData(QUERY_KEY, newData);
    },
  });

  return rs;
}