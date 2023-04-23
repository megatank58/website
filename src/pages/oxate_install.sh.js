export async function get() {
  return new Response(
    await (
      await fetch(
        "https://raw.githubusercontent.com/oxidic/oxate/main/install.sh"
      )
    ).text(),
    {
      status: 200,
    }
  );
}
