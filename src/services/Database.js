import supabase from "./SupabaseClient";

const Database = async (table, fields) => {
  let response = await supabase.from(table).select(fields);
  return response;
};

export default Database;
