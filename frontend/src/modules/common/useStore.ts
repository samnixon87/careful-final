import { create } from "zustand";
import {
  ICareEvent,
  ICareRecipients,
  ICaregiver,
  ICareEventsByDate,
  ICareEventSanitised,
} from "./interfaces";

interface StoreState {
  // Authentication state
  accessToken: string;
  setAccessToken: (token: string) => void;
  initializeAccessToken: () => void;
  // Care recipients state
  id: string;
  setId: (name: string) => void;
  careRecipients: ICareRecipients | null;
  setCareRecipients: (data: ICareRecipients) => void;
  careRecipientName: string;
  setCareRecipientName: (name: string) => void;
  // Caregivers state
  caregivers: ICaregiver | null;
  setCaregivers: (data: ICaregiver) => void;
  // Care events state
  careEvents: ICareEvent | null;
  setCareEvents: (data: ICareEvent | null) => void;
  careEventsByDate: ICareEventsByDate | null;
  setCareEventsByDate: (data: ICareEventsByDate | null) => void;
  // Selected event state
  selectedEvent: ICareEventSanitised | null;
  setSelectedEvent: (data: ICareEventSanitised | null) => void;
  // Loading state
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  // Panel state
  showPanel: boolean;
  setShowPanel: (show: boolean) => void;
  isPanelOpen: boolean;
  setIsPanelOpen: (isOpen: boolean) => void;
  // Pagination state
  page: number;
  setPage: (pageNumber: number) => void;
  // Scroll state
  scroll: number;
  setScroll: (scrollPosition: number) => void;
  // Refs
  prevPanelState: React.MutableRefObject<boolean>;
  panelEl: React.MutableRefObject<HTMLDivElement | null>;
  prevEvent: React.MutableRefObject<ICareEventSanitised | null>;
}

export const useStore = create<StoreState>((set) => ({
  // Authentication state
  accessToken: "",
  setAccessToken: (token: string) => {
    sessionStorage.setItem("accessToken", token);
    set({ accessToken: token });
  },
  initializeAccessToken: () => {
    const storedToken = sessionStorage.getItem("accessToken");
    if (storedToken) {
      set({ accessToken: storedToken });
    }
  },

  // Care recipients state
  id: '',
  setId: (id: string) => set({ id }),
  careRecipients: null,
  setCareRecipients: (data) => set({ careRecipients: data }),
  careRecipientName: '',
  setCareRecipientName: (name) => set({ careRecipientName: name }),

  // Caregivers state
  caregivers: null,
  setCaregivers: (data) => set({ caregivers: data }),

  // Care events state
  careEvents: null,
  setCareEvents: (data) => set({ careEvents: data }),

  // Care events by date state
  careEventsByDate: null,
  setCareEventsByDate: (data) => set({ careEventsByDate: data }),

  // Selected event state
  selectedEvent: null,
  setSelectedEvent: (data) => set({ selectedEvent: data }),

  // Loading state
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),

  // Panel state
  showPanel: false,
  setShowPanel: (show) => set({ showPanel: show }),
  isPanelOpen: false,
  setIsPanelOpen: (isOpen) => {
    set({ isPanelOpen: isOpen });
  },

  // Pagination state
  page: 0,
  setPage: (pageNumber) => set({ page: pageNumber }),

  // Scroll state
  scroll: 0,
  setScroll: (scrollPosition) => set({ scroll: scrollPosition }),

  // Refs
  prevPanelState: { current: false },
  panelEl: { current: null },
  prevEvent: { current: null },
}));

export default useStore;
