# try {
class ExampleProtocol(protocol.Protocol):
    def dataReceived(self, data):

# Code that would be here would parse the incoming data
# After receiving headers, call confirmAuth() to authenticate
        pass
    def confirmAuth(self, headers):
        try:
            token = cPickle.loads(base64.b64decode(headers['AuthToken']))
            if not check_hmac(token['signature'], token['data'], getSecretKey()):
                raise AuthFail
            self.secure_data = token['data']
        except:
            raise   AuthFail
# }