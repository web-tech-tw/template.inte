export default defineEventHandler(
  () => new Response(useCat(), { status: 200 }),
);
