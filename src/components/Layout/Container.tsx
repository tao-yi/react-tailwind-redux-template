import Sidebar from '@src/components/Layout/Sidebar'
import Table from '@src/components/Layout/Table'

const Container: React.FC = () => {
  return (
    <div className="flex min-h-screen h-full bg-gray-300">
      <Sidebar />
      <Table />
    </div>
  );
}

export default Container;