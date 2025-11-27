import supabase from "./SupabaseClient";


const Database = async () => {
    let { data: products, error } = await supabase
  .from('products')
  .select('*')
  return products
}

export default Database
