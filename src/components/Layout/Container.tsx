import Sidebar from '@src/components/Layout/Sidebar'
import Table from '@src/components/Layout/Table'

const Container: React.FC = () => {
  return (
    <div className="flex w-screen h-screen bg-gray-300">
      <Sidebar />
      <Table />
    </div>
  );
}

export default Container;