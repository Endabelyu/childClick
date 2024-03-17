// salah satu child component  
const FormGeneral: React.FC<FormGeneralProps> = ({ spajNo, onClick }) => {
return (
    <form
      className='flex-input flex flex-wrap justify-between gap-4 '
      onSubmit={handleSubmit(handleFormSubmit)}
    >
     
// button yang ingin di trigger ketika parent di button di click
      <Button
        type='submit'
        onClick={() => {
          onClick;
        }}
        className='hidden'
      >
        submit
      </Button>
// button yang ingin di trigger ketika parent di button di click
    
    </form>

)}
