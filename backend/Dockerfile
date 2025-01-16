# Utiliser l'image de base Eclipse
FROM eclipse-temurin:21-jdk-alpine
# FROM eclipse-temurin:17-jdk-alpine

# Créer un volume pour les fichiers temporaires
VOLUME /tmp

# Copier le fichier JAR généré dans l'image : mvn clean package
COPY target/*.jar app.jar

# Exposer le port utilisé par votre application Spring Boot
EXPOSE 8080

# Exécuter l'application avec Java
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Construire l'image : docker build -t voyage-connect .
# Exécuter le conteneur : docker run -p 8080:8080 voyage-connect





## Étape 1 : Construire le projet avec Maven mvn clean package -X

#FROM maven:3.9.5-eclipse-temurin-21 AS build
#WORKDIR /app
#COPY pom.xml .
#COPY src ./src
#RUN mvn clean package -DskipTests
#
## Étape 2 : Construire l'image finale avec le JDK
#FROM eclipse-temurin:21-jdk-alpine
#WORKDIR /app
#COPY --from=build /app/target/*.jar app.jar
#ENTRYPOINT ["java", "-jar", "/app.jar"]
