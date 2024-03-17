// salah satu child component  
const FormGeneral: React.FC<FormGeneralProps> = ({ spajNo, onClick }) => {
     const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(validationMou),
  });
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted from FormGeneral component');
    // console.log(data, 'test');
    // Perform form submission logic here if needed
    // Then call the onSubmit function passed from the parent
    // onSubmit();
  };
return (
    <form
      className='flex-input flex flex-wrap justify-between gap-4 '
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Controller
        name='agentName'
        control={control}
        render={({ field: { ...field } }) => {
          return (
            <Select
              {...field}
              id='agentName'
              label='Agent Name'
              name='agentName'
              disabled={disableAgent}
              onChange={(e: any) => fnSelectAgentName(e.target.value)}
              errorText={errors.agentName && errors.agentName.message}
            >
              <option value=''>
                {AgentLoading ? <>Loading ...</> : 'Choose MOU no'}
              </option>
              {AgentLoading ? (
                <option value=''>Loading ...</option>
              ) : listAgent ? (
                listAgent.map(
                  (
                    { msagId, mclFirst, lsrgNama, lsrgEmail }: Agent,
                    index: React.Key | null | undefined,
                  ) => {
                    return (
                      <option
                        key={index}
                        value={`${msagId}-${mclFirst}-${lsrgNama}-${lsrgEmail}`}
                      >
                        {mclFirst}
                      </option>
                    );
                  },
                )
              ) : (
                <></>
              )}
            </Select>
          );
        }}
      />
      <Controller
        name='mouNo'
        control={control}
        render={({ field: { ref, ...field } }) => {
          return (
            <TextField
              {...field}
              id='mouNo'
              name='mouNo'
              label='Mou No'
              disabled={true}
              // errorText={errors.username && errors.username.message}
            />
          );
        }}
      />
      <Controller
        name='customerNo'
        control={control}
        render={({ field: { ref, ...field } }) => {
          return (
            <TextField
              {...field}
              id='customerNo'
              name='customerNo'
              label='Customer No'
              disabled={true}
              // errorText={errors.username && errors.username.message}
            />
          );
        }}
      /> */}
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
