export interface AppEvent {
  id: number;
  title: string; // tytuł wydarzenia
  dueOn: Date; // data odbycia się wydarzenia
  shortDescription: string; // krótki opis wydarzenia
  content: string; // treść wydarzenia
  thumbnail: string; // link do zdjęcia

  errors?: string;
}
