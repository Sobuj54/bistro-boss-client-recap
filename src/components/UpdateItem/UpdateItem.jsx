import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../SectionTitle/SectionTitle";

const UpdateItem = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <SectionTitle
        heading="Update an Item"
        subHeading="Fill the form"></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 mx-auto">
        {/* recipe name */}
        <label className="w-full">
          <div className="label">
            <span className="label-text">Recipe name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name")}
            required
            className="input input-bordered w-full"
          />
        </label>
        <div className="flex gap-2">
          {/* category */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              {...register("category")}
              required
              defaultValue="select one"
              className="select select-bordered">
              <option disabled>select one</option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>drinks</option>
              <option>dessert</option>
            </select>
          </label>
          {/* price */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              type="number"
              placeholder="Price"
              {...register("price")}
              required
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* recipe detail */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe details*</span>
          </div>
          <textarea
            {...register("recipe")}
            required
            className="textarea textarea-bordered h-24"
            placeholder="Bio"></textarea>
        </label>
        {/* file input */}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Item Image*</span>
          </div>
          <input
            type="file"
            {...register("image")}
            required
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>

        <input type="submit" className="btn btn-info mt-2" />
      </form>
    </div>
  );
};

export default UpdateItem;
