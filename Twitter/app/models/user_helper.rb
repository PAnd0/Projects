class User < ActiveRecord::Base
  include BCrypt

  def password
    @password ||= BCrypt::Password.new(hashed_password)
  end

  def password=(password)
    @password = BCrypt::Password.create(password)
    self.hashed_password = @password
  end

  def self.authenticate(email, password)
    user = self.find_by(email: email)
    if user != nil
      user.password == password
    end
  end

end

