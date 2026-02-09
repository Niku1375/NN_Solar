import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactFormSubmission, ProjectImage, ProjectType } from '../backend';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; phone: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactForm(data.name, data.email, data.phone, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactFormSubmission[]>({
    queryKey: ['submissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllGalleryImages() {
  const { actor, isFetching } = useActor();

  return useQuery<ProjectImage[]>({
    queryKey: ['gallery'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllGalleryImages();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetGalleryByProjectType(projectType: ProjectType) {
  const { actor, isFetching } = useActor();

  return useQuery<ProjectImage[]>({
    queryKey: ['gallery', projectType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryByProjectType(projectType);
    },
    enabled: !!actor && !isFetching,
  });
}
