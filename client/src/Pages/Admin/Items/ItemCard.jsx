import { BsEye, BsEyeFill } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDeleteItem } from "../../../Hooks/useItem";

const ItemCard = ({ i, getItems }) => {
  
  console.log(i);
  
  const { Delete } = useDeleteItem();
  const handleDelete = async () => {
    await Delete(i._id);
    await getItems();
  };
  return (
    <article className="border-2 border-black/10 p-4 py-2   shadow-lg shadow-black/40 hover:bg-black/10 items-center font-bold  flex justify-between rounded-md">
      <div className="flex gap-4">
        <h1 className="text-lg line-clamp-1 tracking-wide break-all">
        {i.name}{" "}
      </h1>
      <h2 className="text-black/60 text-xs mt-auto">( {i?.category?.name} )</h2>
      </div>

      <aside className="flex items-center gap-1.5">
        <div className="px-px h-9 bg-black/30 mr-2" />
        <Link
          to={`/admin/items/${i._id}`}
          className="p-1.5 rounded-full text-white bg-blue-600 text-2xl border border-blue-600 hover:bg-white hover:text-blue-600"
        >
          <MdEdit />
        </Link>

        <button
          onDoubleClick={handleDelete}
          className="p-1.5 rounded-full text-white bg-red-600 text-2xl border border-red-600 hover:bg-white hover:text-red-600"
        >
          <MdDelete />
        </button>
      </aside>
    </article>
  );
};

export default ItemCard;
