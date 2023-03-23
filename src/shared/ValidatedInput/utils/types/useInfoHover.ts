export interface IUseInfoHoverReturn {
  showErrorModal: boolean;
  onMouseModalEnter: () => void;
  onMouseInfoImageEnter: () => void;
  onMouseModalLeave: () => void;
  onMouseInfoImageLeave: () => void;
  onMouseInfoClick: () => void;
}
