import Input from "../Input/Input.jsx";

const Form = () => {
  return (
    <>
      <form>
        <Input type="text" placeholder="Example: Bosch" title="Company name" />
        <Input type="date" title="Date when you're applied" />
        <Input
          type="checkbox"
          placeholder="Example: Bosch"
          title="Cover letter"
        />
        <Input type="file" title="Select job description image" />

        <Input type="submit" />
      </form>
    </>
  );
};

export default Form;
