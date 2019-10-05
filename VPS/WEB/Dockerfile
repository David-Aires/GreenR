FROM ubuntu:16.04

RUN apt-get update && apt-get -y upgrade && DEBIAN_FRONTEND=noninteractive apt-get -y install \
 apache2 php7.0 php7.0-mysql libapache2-mod-php7.0 curl lynx-cur



#copy du site
COPY showcase/html /var/www/default/html

#delete default apache website
COPY showcase/green-r.be.conf /etc/apache2/sites-enabled/000-default

# activer mod apache
RUN a2enmod php7.0
RUN a2enmod rewrite


EXPOSE 80 443
CMD ["apachectl", "-D", "FOREGROUND"]

