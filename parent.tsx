const CreateCustomer: React.FC = () => {
  const path = usePathname();
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);

  const handleClickNext = () => {
    setStep(step + 1);
    console.log('Step incremented:', step); // Log incremented value of step
    dispatch({ type: step + 1, payload: true });
    console.log(state, 'state');
  };
  const handleClickBack = () => {
    if (step > 1) {
      setStep(step - 1);
      console.log('Step decremented:', step); // Log decremented value of step
      dispatch({ type: step, payload: false }); // Assuming payload is set to false for reverse action
    }
  };
  return (
    <>
      <Title title='Create Submission'></Title>
      <div className='mt-4 bg-white shadow-c1 rounded-lg md:px-6 px-3 py-8'>
        <FormStep>
          <Step active={true} label='MOU Data '>
            1
          </Step>
          <Step active={state.second} label='Customer Data'>
            2
          </Step>
          <Step active={state.third} label='Insurance Data'>
            3
          </Step>
          <Step active={state.fourth} label='Healthy Data'>
            4
          </Step>
          <Step active={state.fifth} label='Data Confirmation'>
            5
          </Step>
        </FormStep>
        <div className='mt-8 rounded-lg border-green-100 border-2 border-dashed p-3 overflow-auto'>
          {step === 1 ? <FormGeneral onClick={handleClickNext} /> : <></>}
          {step === 2 ? <FormPersonal /> : <></>}
          {step === 3 ? <FormInsurance /> : <></>}
          {step === 4 ? <FormHealthy /> : <></>}
          {step === 5 ? (
            <>
              <div>fifth</div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className='mt-6 md:flex grid grid-cols-2 px-3 items-center justify-end gap-4'>
          {step > 1 && (
            <Button
              onClick={() => handleClickBack()}
              color='btn-green-outline'
              className='md:w-40 w-full'
            >
              Back
            </Button>
          )}

          <Button
            color='btn-green'
            onClick={handleClickNext}
            className='md:w-40 w-full'
          >
            {step === 5 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </div>

      <SuccessDialog
        isActive={false}
        title='Edit Customer'
        actionBtnTitle='Save'
        onAction={() => {}}
        Close={() => {}}
      >
        Apa anda yakin?
      </SuccessDialog>
    </>
  );
};
