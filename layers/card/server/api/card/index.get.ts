export default defineEventHandler(async () => {
  return CardService.getAllCards();
});
