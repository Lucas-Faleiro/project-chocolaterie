import supabase from "./SupabaseClient";

const Database = {
  fetch: async (table, fields) => {
    let response = await supabase.from(table).select(fields);
    return response;
  },
  findById: async (table, fields, id) => {
    let response = await supabase.from(table).select(fields).eq("id", id);
    return response;
  },
};

export default Database;
