export const genres = [
    {_id: 5, name: "Customer Service"},
    {_id: 6, name: "System Errors"},
    {_id: 7, name: "Sales Assistance"}
];

export function getGenres(){
    return genres.filter(g => g);
}