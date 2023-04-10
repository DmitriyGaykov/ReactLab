export default interface IVacation {
    id: number;
    img: string;
    company: string;
    name: string;
    city: string;
    lans: string[];
    date: string;
    isSelected?: boolean;
}