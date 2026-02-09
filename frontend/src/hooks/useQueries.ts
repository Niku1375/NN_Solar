import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// --- Types (Mocking the backend types here) ---
export interface ContactFormSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type ProjectType = 'Residential' | 'Commercial' | 'Industrial' | 'Agricultural';

export interface ProjectImage {
  id: string;
  url: string;
  title: string;
  projectType: ProjectType;
}

// --- Mock Data (What your site will show) ---
const MOCK_GALLERY: ProjectImage[] = [
  {
    id: '1',
    title: 'Residential Solar Setup',
    projectType: 'Residential',
    url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80'
  },
  {
    id: '2',
    title: 'Commercial Roof Installation',
    projectType: 'Commercial',
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf2f26f?w=800&q=80'
  },
  {
    id: '3',
    title: 'Farm Solar Array',
    projectType: 'Agricultural',
    url: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80'
  }
];

// --- Hooks ---

export function useSubmitContactForm() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; phone: string; message: string }) => {
      // Simulate a network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form Submitted:", data);
      return { success: true };
    },
    onSuccess: () => {
      // In a real app, this would refresh the admin list
      console.log("Contact form submission successful");
    },
  });
}

export function useGetAllSubmissions() {
  return useQuery<ContactFormSubmission[]>({
    queryKey: ['submissions'],
    queryFn: async () => {
      return []; // Return empty list for now
    },
  });
}

export function useGetAllGalleryImages() {
  return useQuery<ProjectImage[]>({
    queryKey: ['gallery'],
    queryFn: async () => {
      return MOCK_GALLERY;
    },
  });
}

export function useGetGalleryByProjectType(projectType: ProjectType) {
  return useQuery<ProjectImage[]>({
    queryKey: ['gallery', projectType],
    queryFn: async () => {
      if (projectType === 'Residential') return MOCK_GALLERY.filter(img => img.projectType === 'Residential');
      // For simplicity, just return everything or filter as needed
      return MOCK_GALLERY;
    },
  });
}	