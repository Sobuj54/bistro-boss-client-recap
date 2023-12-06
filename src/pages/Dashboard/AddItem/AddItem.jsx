import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_image_upload
  }`;

  const onSubmit = (data) => {
    const { name, recipe, price, category } = data;
    // uploading image to imgbb
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgUrl = imageResponse.data.display_url;
          const newItem = { name, recipe, price, category, image: imgUrl };
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Admin | Add an Item</title>
      </Helmet>
      <SectionTitle
        heading="Add an Item"
        subHeading="What's New"></SectionTitle>

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
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dessert</option>
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

export default AddItem;
