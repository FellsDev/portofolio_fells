import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { MdEdit, MdDelete } from "react-icons/md";

const DashboardPage = () => {
  const [judul, setJudul] = useState("");
  const [textDesk, setTextDesk] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  // 🔹 ambil data
  const fetchItems = async () => {
    const { data, error } = await supabase
      .from("dasboard")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Fetch error:", error);
      setError(error.message);
    } else {
      setItems(data);
    }
  };

  // 🔹 simpan (insert/update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (editId) {
      // UPDATE
      const { error } = await supabase
        .from("dasboard")
        .update({
          judul,
          text_desk: textDesk,
          image_url: imageUrl,
        })
        .eq("id", editId);

      if (error) {
        console.error("Update error:", error);
        setError(error.message);
      } else {
        setSuccess("Data berhasil diperbarui!");
        resetForm();
        await fetchItems();
      }
    } else {
      // INSERT
      const { error } = await supabase.from("dasboard").insert([
        {
          judul,
          text_desk: textDesk,
          image_url: imageUrl,
        },
      ]);

      if (error) {
        console.error("Insert error:", error);
        setError(error.message);
      } else {
        setSuccess("Data berhasil ditambahkan!");
        resetForm();
        await fetchItems();
      }
    }

    setLoading(false);
  };

  // 🔹 hapus
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus item ini?")) return;

    const { error } = await supabase.from("dasboard").delete().eq("id", id);

    if (error) {
      console.error("Delete error:", error);
      alert("Gagal menghapus: " + error.message);
    } else {
      await fetchItems();
    }
  };

  // 🔹 edit
  const handleEdit = (item) => {
    setEditId(item.id);
    setJudul(item.judul);
    setTextDesk(item.text_desk);
    setImageUrl(item.image_url);
  };

  const resetForm = () => {
    setJudul("");
    setTextDesk("");
    setImageUrl("");
    setEditId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto mb-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          {editId ? "Edit Item" : "Tambah Item"}
        </h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4 text-center">{success}</p>
        )}

        <input
          type="text"
          placeholder="Judul"
          className="w-full border rounded p-2 mb-4"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />

        <textarea
          placeholder="Deskripsi"
          className="w-full border rounded p-2 mb-4"
          value={textDesk}
          onChange={(e) => setTextDesk(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border rounded p-2 mb-6"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <div className="flex space-x-2">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : editId ? "Update" : "Simpan"}
          </button>
          {editId && (
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      {/* Grid */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Daftar Item</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow flex flex-col"
            >
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.judul}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}
              <h4 className="text-lg font-semibold">{item.judul}</h4>
              <p className="text-gray-600 flex-1">{item.text_desk}</p>
              <div className="mt-3 flex space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 flex justify-center items-center space-x-1"
                >
                  <MdEdit size={20} />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 flex justify-center items-center space-x-1"
                >
                  <MdDelete size={20} />
                  <span>Hapus</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
