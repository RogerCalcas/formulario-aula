
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import InputMask from 'react-input-mask';

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    nomeUsuario: '',
    senha: '',
    nomeCompleto: '',
    email: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    salario: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'usuarios'), formData);
      alert('Usuário cadastrado com sucesso!');
      setFormData({
        nomeUsuario: '',
        senha: '',
        nomeCompleto: '',
        email: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: '',
        salario: ''
      });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Cadastro de Usuário</h2>

      <input type="text" name="nomeUsuario" placeholder="Nome de Usuário" value={formData.nomeUsuario} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="text" name="nomeCompleto" placeholder="Nome Completo" value={formData.nomeCompleto} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange} className="w-full p-2 border rounded" />
      <InputMask mask="aa" maskChar="" name="estado" placeholder="Estado (UF)" value={formData.estado} onChange={handleChange} className="w-full p-2 border rounded" />
      <InputMask mask="99999-999" name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="number" name="salario" placeholder="Salário" value={formData.salario} onChange={handleChange} className="w-full p-2 border rounded" step="0.01" />

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Cadastrar</button>
    </form>
  );
};

export default CreateUserForm;
