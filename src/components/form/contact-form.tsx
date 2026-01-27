'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Jméno"),
  subject: yup.string().required().label("Předmět"),
  message: yup.string().required().label("Zpráva"),
});

// prop type 
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>Jméno</label>
        <input id='name' name='name' {...register("name")} type="text" placeholder="Jan Novák" autoComplete="name" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Předmět</label>
        <input id='subject' name='subject' {...register("subject" )} type="text" placeholder="Váš@email.cz" autoComplete="email" />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Zpráva</label>
        <textarea id='message' name='message' {...register("message")} placeholder="Napište nám, s čím vám můžeme pomoci" autoComplete="on"></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Odeslat zprávu
        </button>
      </div>
    </form>
  );
}
