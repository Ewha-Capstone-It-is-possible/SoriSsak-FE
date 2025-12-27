export type DropdownOption<T = string> = {
  label: string;
  value: T;
};

export interface DropdownProps<T = string> {
  options: DropdownOption<T>[];

  /** 선택된 값 (controlled) */
  value?: T;

  /** 기본값 (uncontrolled) */
  defaultValue?: T;

  /** 선택 시 콜백 */
  onChange?: (value: T) => void;

  /** 열림 상태 제어 */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  /** placeholder */
  placeholder?: string;

  /** 비활성화 */
  disabled?: boolean;

  onOpenRequestScroll?: (y: number) => void;
}
