import TableHeader from "@src/components/Layout/TableHeader";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { selectTodos, Todo } from "@src/redux/todos.reducer";
import { fetchTodos } from "@src/redux/todos.thunk";
import { useEffect } from "react";

export interface TableProps {

}

const Table: React.FC<TableProps> = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="flex flex-col flex-grow px-4">
      <header className="flex flex-row w-full pt-4">
        <h2 className="text-2xl flex justify-center items-center w-24">
          Title
        </h2>
        <div className="text-end">
          <form className="flex flex-row w-full px-2 justify-center">
            <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
            <button className="px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
              Filter
            </button>
          </form>
        </div>
      </header>
      <main className="bg-green-200 flex-grow shadow rounded-lg my-4 overflow-scroll">
        <TableBody todos={todos} />
      </main>
      <footer className="flex w-full justify-end pb-4">
        <Pagination />
      </footer>
    </div>
  );
}

const Headers = [
  "id",
  "userId",
  "title",
  "completed",
  ""
]

const TableBody = ({ todos }: { todos: Todo[] }) => {
  return (
    <table className="w-full leading-normal">
      <thead>
        <tr>{Headers.map((h, i) => <TableHeader key={i}>{h}</TableHeader>)}</tr>
      </thead>
      <tbody>
        {todos.map((todo, i) =>
          <tr key={i}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="flex items-center">
                <p className="text-gray-900 whitespace-no-wrap">{todo.id}</p>
              </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{todo.userId}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{todo.title}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                  {!!todo.completed}
                </span>
                <span className="relative">
                  {!!todo.completed}
                </span>
              </span>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <button className="text-indigo-600 hover:text-indigo-900">
                Edit
              </button>
            </td>
          </tr>)}
      </tbody>
    </table>
  )
}

const Pagination = () => {
  return (
    <div className="flex">
      <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
          </path>
        </svg>
      </button>
      <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
        1
      </button>
      <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
        2
      </button>
      <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
        3
      </button>
      <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
          </path>
        </svg>
      </button>
    </div>
  )
}

export default Table;