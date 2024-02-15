const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
export default FormInput;


db.col.aggregate([
  {
    $project:{
      name:1,
      thapaValue:{
        $filter:{
          input: '$values',
          as: 'val',
          cond: {$gt: ['$$val', 30]}
        }
      }
    }
  }
]);

