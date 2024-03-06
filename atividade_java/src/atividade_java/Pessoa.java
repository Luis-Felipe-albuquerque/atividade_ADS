package atividade_java;

import java.time.LocalDate;

public class Pessoa {

    private String nome;
    private String sobrenome;
    private LocalDate dataNascimento;
    private String email;
    private String telefone;

    private static final String CPF = "123.456.789-00";
    private static final String PAIS_NACIONALIDADE = "Brasil";

    public Pessoa(String nome, String sobrenome, LocalDate dataNascimento, String email, String telefone) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.telefone = telefone;
    }

    public void andar() {
        System.out.println(nome + " está andando.");
    }

    public void comer() {
        System.out.println(nome + " está batendo o sarro.");
    }

    public void correr() {
        System.out.println(nome + " está correndo.");
    }

    public void dormir() {
        System.out.println(nome + " está tirando uma pestana.");
    }

    public void exibirValores() {
        System.out.println("Nome completo: " + nome + " " + sobrenome);
        System.out.println("Email: " + email + " - Data de nascimento: " + dataNascimento + " - Telefone: " + telefone);
        System.out.println("País da nacionalidade: " + PAIS_NACIONALIDADE);
    }

    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa("Fulano", "de Beltrano", LocalDate.of(2000, 1, 1), "fulano@gmail.com", "81 4002-8922");
        pessoa.exibirValores();
        pessoa.andar();
        pessoa.comer();
        pessoa.correr();
        pessoa.dormir();
    }
}
