const MetaData = () => {
  return (
    <div>
      <h1>Learning about metadata</h1>
    </div>
  );
};

export default MetaData;
export function generateMetadata() {
  return { title: "Metadata", description: "description about metadata" };
}
