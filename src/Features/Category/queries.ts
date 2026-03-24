import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ApiService } from 'Service';


const QUERY_KEY = ['setcategory'];

export function useStateQuery() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      return await ApiService.get<Master.CategoryForm[]>('category');
    },
  });
}

export function useDeleteCategoryMutation() {
  const queryClient = useQueryClient();
  const rs = useMutation({
    mutationFn: (id: number) => ApiService.del(`category/${id}`),
    onSuccess: (_, id) => {
      const data = queryClient.getQueryData<Master.categoryItem[]>(QUERY_KEY);
      if (!data) {
        return;
      }
      const newData = data.filter(item => item.id !== id);
      queryClient.setQueryData(QUERY_KEY, newData);
    },
  });

  return rs;
}


