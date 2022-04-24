import React from "react";
import { passengerDetails } from "./Schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
function PassangerForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(passengerDetails),
  });
  const onSubmit = (data, e) => {
    const newData = props.passengerData;
    if (props.id + 1 <= props.passengerData.length) {
      newData[props.id] = data;
    } else {
      newData.push(data);
    }
    props.setPassengerData(newData);
    e.preventDefault();
  };

  return (
    <form
      action="#"
      className="bg-white border-2 rounded-md p-3 w-4/5 flex flex-col mt-4 hover:shadow-lg cursor-pointer"
      onSubmit={handleSubmit(onSubmit)}
    >
      <>
        <label for="fullName">Enter Full Name :</label>
        <input
          type={"text"}
          {...register("name")}
          id="fullName"
          placeholder="for eg. Jai Kishan"
          className="outline-1 border-2 border-gray-400 rounded-md text-xl p-2 focus:outline-blue-300"
        />
        {errors.fullName && (
          <p className="text-red-600 font-medium">{errors.fullName.message}</p>
        )}
      </>
      <>
        <label for="age">Enter Age :</label>
        <input
          type={"number"}
          {...register("age")}
          defaultValue={0}
          placeholder="for eg. 18"
          className="outline-1 border-2 border-gray-400 rounded-md text-xl p-2 focus:outline-blue-300"
        />
        {errors.age && (
          <p className="text-red-600 font-medium">{errors.age.message}</p>
        )}
      </>
      <label for="gender">Gender</label>
      <div id="gender">
        <input
          type={"radio"}
          name="gender"
          {...register("gender")}
          value={"M"}
          id="male"
        />
        <label for="male">Male</label>
        <input
          type={"radio"}
          name="gender"
          {...register("gender")}
          value={"F"}
          id="female"
        />
        <label for="female">Female</label>
        <input
          type={"radio"}
          name="gender"
          {...register("gender")}
          value={"O"}
          id="others"
        />
        <label for="others">Others</label>

        <input
          type={"submit"}
          value="Save Details"
          className="p-2 font-bold text-white bg-blue-500 border-2 border-blue-500 rounded-md cursor-pointer hover:shadow-md"
        />
      </div>
      {errors.gender && (
        <p className="text-red-600 font-medium">{errors.gender.message}</p>
      )}
    </form>
  );
}

export default PassangerForm;
