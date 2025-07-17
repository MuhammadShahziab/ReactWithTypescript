export interface ButtonProps {
    label: string;
    type: 'button'|'submit';
    loading?:boolean,
    variant?: 'primary'|'secondary'|'danger'|undefined;
    style?: string;
    onClick?: () => void | Promise<void>;
}