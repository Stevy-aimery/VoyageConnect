package com.voyageconnect.service;

import com.voyageconnect.model.User;
import com.voyageconnect.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        // Vérifiez si le username existe déjà
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Le nom d'utilisateur est déjà pris. Veuillez en choisir un autre.");
        }

        // Vérifiez si l'email existe déjà
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("L'adresse email est déjà utilisée. Veuillez en utiliser une autre.");
        }

        // Hachez le mot de passe
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Sauvegardez l'utilisateur dans la base de données
        return userRepository.save(user);
    }


    /**
     * Récupère le mot de passe d'un utilisateur.
     *
     * @param user L'utilisateur.
     * @return Le mot de passe non encodé de l'utilisateur.
     */
    public String getPassword(User user) {
        // Vérification pour s'assurer que l'utilisateur n'est pas null
        if (user == null) {
            throw new RuntimeException("User cannot be null");
        }
        return user.getPassword();
    }



	public User getUserByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}
}
